const styleElem = document.createElement("style")
styleElem.innerHTML = ```
iframe[name="3rd party ad content"] {
  display: none;
}
```
document.head.appendChild(styleElem)