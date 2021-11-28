import Heading from "./Heading";
import ListItem from "./ListItem"

function card() {
    return(
        <>
            <div>
                <Heading headTitle={"Mobile Operating System"}/>
                <ListItem item1={"Android"} item2={"Blackberry"} item3={"iPhone"} item4={"Windows Phone"}/>
            </div>

            <div>
                <Heading headTitle={"Mobile Manufacturers"}/>
                <ListItem item1={"Samsung"} item2={"HTC"} item3={"Micromax"} item4={"Apple"}/>
            </div>
        </>
    )
}

export default card