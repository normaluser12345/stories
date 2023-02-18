import { useEffect, useState, useContext } from 'react';
import { useNavigate, useParams } from "react-router"
import styled, { css } from 'styled-components';
import axios from 'axios';
import { Player } from './AudioPlayer/AudioPlayer';
import { CurrentStoryIndexRef } from '../../context/CurrentStoryIndexRef';

import { PageQueryType } from "../../types";
import { IStory } from '../../types';
import { StatusState   } from '../../types';

interface QueryPageProps {
    className?: string;
    type: PageQueryType;
}

type QueryPageBackgroundImageProps = QueryPageProps & {
    backgroundImage?: IStory['backgroundImage']
}

const QueryPageBackgroundImage = styled.div<QueryPageBackgroundImageProps>`
    position: relative;
    background: ${props => props.backgroundImage && `url(${props.backgroundImage + ''}) center center no-repeat`};
    width: ${props => (props.type === 'articles' || props.type === 'courses')? '100%' : '150px'};
    min-height: ${props => (props.type === 'articles' || props.type === 'courses') && '242px'};
    height: ${props => (props.type === 'articles' || props.type === 'courses')? css`calc(30% + 80px)` : '150px'};
    margin-bottom: 20px;
    background-size: cover;
`


const articlesInfo = [
    {
        id: 1,
        title: '#Tag(Категория)',
        description: 'Красота и здоровье',
    },
    {
        id: 2,
        title: 'Статья подготовлена при поддержке',
        description: 'Abyss.ssce',
    },
    {
        id: 3,
        title: 'Время чтения',
        description: '5-7 минут',
    },
]

const coursesInfo = [
    {
        id: 1,
        title: '#Tag(Категория)',
        description: 'Красота и здоровье',
    },
    {
        id: 2,
        title: 'Статья подготовлена при поддержке',
        description: 'Abyss.ssce',
    },
]

const click = (e: React.MouseEvent) => {
    e.stopPropagation()
}


export const QueryPage = ({ className, type }: QueryPageProps) => {

    const { id } = useParams()
    const [data, setData] = useState<IStory>()
    const [status, setStatus] = useState<StatusState>('idle')

    const nav = useNavigate()
    const currentStoryIndex = useContext(CurrentStoryIndexRef)

    const backToMainPage = (e: React.MouseEvent) => {
        e.preventDefault()
        currentStoryIndex.current = -1
        nav('/')
    }
    
    const renderContent = (type: PageQueryType) => {
        switch(type) {
            case "articles":
                return (
                    <>
                        <QueryPageBackgroundImage type="articles" backgroundImage={'/'+ data?.backgroundImage}></QueryPageBackgroundImage>
                        <div className="querypage__info">
                            {
                                articlesInfo.map(detail => {
                                    return (
                                        <div key={detail.id} className="info__detail">
                                            <span className="querypage__info_title">{ detail.title }</span>
                                            <span className="querypage__info_subtitle">{ detail.description }</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <p className="querypage__description">
                                Не переставлять будильник, не говорить «ещё пять минут» и не собираться 
                                потом в дикой спешке. Рассказываем, как приучить себя вставать настолько 
                                рано, насколько нужно. И, по возможности, не роптать.
                        </p>
                        <h1 className="querypage__subtitle">Используйте солнечный свет</h1>
                        <p className="querypage__description">
                            Утром сразу откройте шторы — это поможет быстрее проснуться. Если в вашем 
                            часовом поясе световой день слишком короткий, настройте «умный» 
                            будильник — пусть он имитирует солнечное утро: такой свет по утрам помогает 
                            регулировать циркадные ритмы, а это улучшает сон.
                        </p>
                    </>
                );
            case "courses":
                return (
                    <>
                        <QueryPageBackgroundImage type="courses" backgroundImage={'/'+ data?.backgroundImage}></QueryPageBackgroundImage>
                        <div className="querypage__info">
                        {
                            coursesInfo.map(detail => {
                                return (
                                    <div key={detail.id} className="info__detail">
                                        <span className="querypage__info_title">{ detail.title }</span>
                                        <span className="querypage__info_subtitle">{ detail.description }</span>
                                    </div>
                                )
                            })
                        }
                        </div>
                        <p className="querypage__description">
                                Курс для тех, кто под влиянием внешних обстоятельств и/или 
                                внутренних установок откладывает отпуск. Или пренебрегает 
                                ежедневным и еженедельным отдыхом «на месте» — например, в 
                                собственной квартире — в пользу работы.
                        </p>
                        <div className="querypage__footer courses__footer">
                            <div className="querypage__bar"></div>
                            <span className="querypage__info_title">Список уроков</span>
                        </div>
                    </>
                );
            case "media":
                return (
                    <>
                        <p className="media__description">
                                Учимся наблюдать за своими телесными ощущениями, развиваем навык 
                                наблюдения без оценки и фиксируем то, что попадает в поле нашего 
                                внимания. 
                        </p>
                        <div className="querypage__bar"></div>
                        <QueryPageBackgroundImage type="media" backgroundImage={'/' + data?.backgroundImage}>
                            <Player />
                        </QueryPageBackgroundImage>
                    </>
                )
        }
    }

    const getDataPageId = async(type: PageQueryType, id: string) => {
        try {
            setStatus('loading')
            const response = await axios.get<IStory>(`http://localhost:8000/${type}/${id}`)
            const data = await response.data
            setData(data)
            setStatus('fulfilled')
            return data
        } catch (e) {
            setStatus('error')
        }
    }


    useEffect(() => {
        if (id) {
            getDataPageId(type, id)
        }
    }, [type, id])

    return (
        <div id="querypage" className={className} onClick={backToMainPage}>
            <div className={`querypage__content ${type === 'courses' && 'courses__content'}`} onClick={click}>
                <header className="querypage__header">
                    {status === 'loading' ? <>Loading...</> : <h1 className="querypage__title">{ data?.title }</h1>}
                    <button className="querypage__closebutton" onClick={backToMainPage}>CLOSE</button>
                </header>
                <main className="querypage__main">
                { renderContent(type) }
                </main>
            </div>
        </div>
    )
}