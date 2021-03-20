
export const imagewrapper = import(
    require.context("../Images", false, /\.png$/)
);

export const mapFileNameToId = (fileName, fileArray) => {
    for(let i=0; i < fileArray.length; i += 1) {
        if(fileArray[i].indexOf(fileName) !== -1) {
            return fileArray[i].substring(fileArray[i].lastIndexOf("/") + 1);
        }
    }
    return null;
};