const Prayer = (props) => {
    function EditingTime (time) {
        if(!time) 
            return "00:00";
        let [hours , minutes] = time.split(':').map(Number);
        let pred = hours>=12 ? 'PM' : 'AM';
         hours = hours%12 || 12;
         minutes = minutes<10 ?  ('0' + minutes) : minutes;
        return`${pred} ${hours}:${minutes}`
    }
    return <div className="w-40 w-full p-3 rounded bg-orange-800 focus:outline-none mb-2 flex justify-between itmes-center">
        <p className="mr-2">{props.name}</p>
        <p className="ml-2">{EditingTime(props.time)}</p>
    </div>
}
export default Prayer;