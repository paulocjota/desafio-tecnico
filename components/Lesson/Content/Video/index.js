import YoutubeEmbed from '../../../common/YoutubeEmbed'

export default function Video({content, slug}){
    return (
        <>
            {content.data.provider === 'youtube' &&
                <YoutubeEmbed
                    link={content.data.link}
                    slug={slug}
                />
            }
        </>
    )
}