const getCSS = (variavel) => {
    const bodyStyles = getComputedStyle(document.body)
    return bodyStyles.getPropertyValue(variavel)
    };
  
    const tickConfig = {
      color: getCSS('--primary-color'),
    size: 16,
    family: getCSS('--font')
  
    }
    export {getCSS, tickConfig}