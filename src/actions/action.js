export const addFeature = el => {
return {type:'ADD_FEATURE', payload:el}
};

export const removeFeature = el => {
    return {type:'REMOVE_FEATURE', payload:el}
}