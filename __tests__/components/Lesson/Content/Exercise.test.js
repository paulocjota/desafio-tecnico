import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Exercise from '../../../../components/Lesson/Content/Exercise'

jest.mock("next/router", () => ({
    useRouter() {
        return {
            route: "/exercise-2",
            pathname: "",
            query: "",
            asPath: "",
        };
    },
}));

describe('Exercise Component', () => {
    it('expect component Exercise have ". Dia 3 de janeiro de 2010, às 17h." text', () => {
        const content = {
            data: {
                "question": "<p><img src=\"https://cdn.mesalva.com/uploads/image/MjAyMi0wMi0yMSAyMDo1NToyNSArMDAwMDMwNTE5Mw%3D%3D%0A.png\" ></p><p>Uma família partiu de Porto Alegre (RS), às 8h do dia 1° de janeiro de 2010, portanto, dentro do período de vigência do horário de verão, com destino a Belém (PA). Apesar da distância, a viagem será feita de automóvel e terá duração de 56 horas. Qual o dia e a hora de chegada dessa família à capital paraense?</p>",
                "answers": [
                    {
                        "text": "Dia 2 de janeiro de 2010, às 15h.",
                        "isCorrect": false
                    },
                    {
                        "text": "Dia 3 de janeiro de 2010, às 15h.",
                        "isCorrect": true
                    },
                    {
                        "text": "Dia 2 de janeiro de 2010, às 16h.",
                        "isCorrect": false
                    },
                    {
                        "text": "Dia 3 de janeiro de 2010, às 16h.",
                        "isCorrect": false
                    },
                    {
                        "text": "Dia 3 de janeiro de 2010, às 17h.",
                        "isCorrect": false
                    }
                ],
            }
        }

        render(<Exercise content={content} />)

        expect(screen.getByText('. Dia 3 de janeiro de 2010, às 17h.')).toBeInTheDocument()
    })
})