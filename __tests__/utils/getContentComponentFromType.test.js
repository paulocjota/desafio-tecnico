import Exercise from "../../components/Lesson/Content/Exercise";
import Pdf from "../../components/Lesson/Content/Pdf";
import Text from "../../components/Lesson/Content/Text";
import Video from "../../components/Lesson/Content/Video";
import getContentComponentFromType from "../../utils/getContentComponentFromType"

describe('getContentComponentFromType', () => {
    it('passing not existent value expects throw "Parameter "type" has invalid value"', () => {
        expect(() => { getContentComponentFromType('asd') }).toThrow('Parameter "type" has invalid value');
    })

    it('passing "video" expects Video component', () => {
        expect(getContentComponentFromType('video')).toEqual(Video);
    })

    it('passing "text" expects Text component', () => {
        expect(getContentComponentFromType('text')).toEqual(Text);
    })

    it('passing "exercise" expects Exercise component', () => {
        expect(getContentComponentFromType('exercise')).toEqual(Exercise);
    })

    it('passing "pdf" expects Pdf component', () => {
        expect(getContentComponentFromType('pdf')).toEqual(Pdf);
    })
})