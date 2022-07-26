import PurifiedHtml from '../../../common/PurifiedHtml'

export default function Text({content}){
    return (
        <PurifiedHtml html={content.data.html} />
    )
}