import Prayer from "./Prayer";

const ButtomSection = (props) => {

    return <div className="my-4 mr-1">
        <Prayer name='الفجر' time={props.timings.Fajr}/>
        <Prayer name='الظهر' time={props.timings.Dhuhr}/>
        <Prayer name='العصر' time={props.timings.Asr}/>
        <Prayer name='المغرب' time={props.timings.Maghrib}/>
        <Prayer name='العشاء' time={props.timings.Isha}/>
    </div>
}
export default ButtomSection;