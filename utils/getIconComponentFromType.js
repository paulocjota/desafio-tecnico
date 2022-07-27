import {
    VideoCameraIcon,
    DocumentTextIcon,
    ClipboardCheckIcon
} from '@heroicons/react/solid'

export default function getIconComponentFromType(type){
    const options = ['video', 'text', 'exercise']
    if(!options.includes(type)) throw new Error('Parameter "type" has invalid value')

    return {
        'video': VideoCameraIcon,
        'text': DocumentTextIcon,
        'exercise': ClipboardCheckIcon
    }[type]
}