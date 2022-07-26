import DOMPurify from 'dompurify';

export default function PurifiedHtml({html, ...otherProps}){
    let purifiedHtml = DOMPurify.sanitize(html);

    return (
        <div
            {...otherProps}
            dangerouslySetInnerHTML={{ __html: purifiedHtml}}
        ></div>
    )
}