import Exercise from "../components/Lesson/Content/Exercise";
import Pdf from "../components/Lesson/Content/Pdf";
import Text from "../components/Lesson/Content/Text";
import Video from "../components/Lesson/Content/Video";

export default function getContentComponentFromType(type){
    return {
        'video': Video,
        'text': Text,
        'exercise': Exercise,
        'pdf': Pdf
    }[type]
}