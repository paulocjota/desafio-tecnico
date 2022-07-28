import styles from './styles.module.css'
import { CheckIcon, XIcon } from '@heroicons/react/solid'
import numberToAlphabetLetter from "../../../../../utils/numberToAlphabetLetter"
import { useEffect, useState } from "react"
import fetchLesson from "../../../../../utils/fetchLesson"
import PurifiedHtml from "../../../../common/PurifiedHtml"
import { useRouter } from "next/router"
import { Lesson } from '../../../../../utils/Lesson'

export default function Answers({answers, slug}){
    const [selected, setSelected] = useState(false)
    const [selectedOption, setSelectedOption] = useState(null)
    const [exerciseData, setExerciseData] = useState(null)
    const router = useRouter()

    function clean(){
        setSelected(false)
        setSelectedOption(null)
        setExerciseData(null)
    }

    useEffect(() => {
        clean()
    }, [router.asPath]);

    function handleClickOption(index){
        if(selectedOption === index){
            setSelectedOption(null)
            setSelected(false)
        }else{
            setSelectedOption(index)
            setSelected(true)
        }
    }

    async function handleClickShowCorrection(){
        Lesson.setSeen(slug)
        const response = await fetchLesson(slug)
        setExerciseData(response.data)
    }

    return (
        <div>
            <div className={styles.list}>
                {answers.map( (item, index) => {
                    const optionLetter = numberToAlphabetLetter(index).toUpperCase()

                    return (
                        <div
                            key={index}
                            className={styles.itemContainer}
                            data-selected={selectedOption === index}
                            onClick={() => handleClickOption(index)}
                        >
                            <div className={styles.item}>
                                <div className={styles.iconWrapper}>
                                    {exerciseData &&
                                        exerciseData.result.children[0].data.answers.map( (answer, index2) => {
                                            if(index === index2){
                                                if(answer.isCorrect){
                                                    return <CheckIcon key={index2} className={styles.icon} />
                                                }else{
                                                    return <XIcon key={index2} className={styles.icon} />
                                                }
                                            }
                                        })
                                    }
                                </div>
                                <div><b>{optionLetter}</b>. {item.text}</div>
                            </div>
                        </div>
                    )
                })}
            </div>
            {exerciseData &&
                <PurifiedHtml html={exerciseData.result.children[0].data.correction} />
            }
            <div className={styles.buttonCorrectionContainer}>
                {selected &&
                    <button
                        className={styles.buttonCorrection}
                        onClick={handleClickShowCorrection}
                    >Ver correção</button>
                }
            </div>
        </div>
    )
}