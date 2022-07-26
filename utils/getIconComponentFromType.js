import {
    VideoCameraIcon,
    DocumentTextIcon,
    ClipboardCheckIcon
} from '@heroicons/react/solid'

export default function getIconComponentFromType(type){
    return {
        'video': VideoCameraIcon,
        'text': DocumentTextIcon,
        'exercise': ClipboardCheckIcon
    }[type]
}