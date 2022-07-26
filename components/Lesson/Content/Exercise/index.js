import PurifiedHtml from '../../../common/PurifiedHtml'
import Answers from './Answers'

export default function Exercise({content, slug}){
    return (
        <>
            <PurifiedHtml html={content.data.question} />
            <Answers answers={content.data.answers} slug={slug} />
        </>
    )
}