import {
    VideoCameraIcon,
    DocumentTextIcon,
    ClipboardCheckIcon
} from '@heroicons/react/solid'

import getIconComponentFromType from '../../utils/getIconComponentFromType'

describe('getIconComponentFromType', () => {
    it('passing non existent value expects throw "Parameter "type" has invalid value"', () => {
        expect(() => { getIconComponentFromType('asd') }).toThrow('Parameter "type" has invalid value');
    })

    it('passing "video" expects VideoCameraIcon component', () => {
        expect(getIconComponentFromType('video')).toEqual(VideoCameraIcon);
    })

    it('passing "text" expects DocumentTextIcon component', () => {
        expect(getIconComponentFromType('text')).toEqual(DocumentTextIcon);
    })

    it('passing "exercise" expects ClipboardCheckIcon component', () => {
        expect(getIconComponentFromType('exercise')).toEqual(ClipboardCheckIcon);
    })
})