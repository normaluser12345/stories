import { createContext, useRef } from "react"

type CurrentStoryIndex = React.MutableRefObject<number>

export const CurrentStoryIndexRef = createContext<CurrentStoryIndex>({
    current: -1
})

interface CurrentStoryIndexRefProviderProps {
    children: React.ReactNode
}

export const CurrentStoryIndexRefProvider = ({ children }: CurrentStoryIndexRefProviderProps) => {

    const currentStoryIndexRef = useRef<number>(-1)

    return (
        <CurrentStoryIndexRef.Provider value={currentStoryIndexRef}>
            {children}
        </CurrentStoryIndexRef.Provider>
    )
}