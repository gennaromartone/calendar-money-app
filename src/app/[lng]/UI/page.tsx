import { Button } from "@/modules/common/button/button";
import { Input } from "@/modules/common/input/input";

const UiElements = () => {
    return(
        <div className=" flex p-10 flex-col gap-4">
            UI Elements
        <hr/>
        <div className=" flex flex-col gap-4">
            <div>
                <label>Input</label>
                <Input/>
            </div>
            <div>
                <label>Input with Label</label>
                <Input label="With Label" />
            </div>
            <hr/>
            <div>
                <label>Button</label>
                <Button title="Button"/>
            </div>
            <div>
                <label>Button with Label</label>
                <Button title="Button" label="With Label" />
            </div>


        </div>
        </div>
    )
}

export default UiElements;