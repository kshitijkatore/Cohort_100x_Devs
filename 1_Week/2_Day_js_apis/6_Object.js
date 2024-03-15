// Objects Method Explaination

const obectMethods = (obj)=>{
    console.log("Original Objects :", obj);

    let keys = Object.keys(obj);
    console.log("After Object.Keys :", keys);

    let values = Object.values(obj);
    console.log("After Object.Values :", values);

    let entries = Object.entries(obj);
    console.log("After Object.Entries :", entries);

    let hasProp = obj.hasOwnProperty("property");
    console.log("After Object.hasOwnProperty :", hasProp);

    let newObj = Object.assign({}, obj, {newProperty : "newValue"});
    console.log("After Object.assign :", newObj);
}

const sampleObject = {
    key1: "value1",
    key2: "value2",
    key3: "value3"

}
obectMethods(sampleObject);