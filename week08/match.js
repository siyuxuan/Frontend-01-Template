function matchByClassSelector(selector, element) {
  return element.className.split(/\s+/g).includes(selector.replace('.', ''))
}

function matchByTypeSelector(selector, element) {
  return element.tagName === selector.toUpperCase()
}

// 检查一个元素和简单选择器是否匹配
function matchBySimpleSelector(selector, element) {
  if (!selector || !element) {
    return false
  } else if (selector.startsWith('.')) { // class
    return matchByClassSelector(selector, element)
  } else { // type_selector
    return matchByTypeSelector(selector, element)
  }
}
