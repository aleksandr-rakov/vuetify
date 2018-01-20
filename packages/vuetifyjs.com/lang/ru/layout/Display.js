export default {
  header: 'Дисплей',
  headerText: 'С помощью экранных помощников вы можете контролировать отображение содержимого. Это включает в себя условное отображение на основе текущего _viewport_ (области просмотра) или фактического типа отображения элемента.',
  toc: [
    {
      text: 'Введение',
      href: 'introduction'
    },
    {
      text: 'Видимость',
      href: 'visibility'
    },
    {
      text: 'Дисплей',
      href: 'display'
    },
    {
      text: 'Примеры',
      href: 'examples'
    }
  ],
  visibilityHeader: 'Видимость',
  visibilityText: 'Условно отобразить элемент, основанный на текущем **viewport (области просмотра)**. Эти классы могут быть применены с использованием следующего формата `hidden- {breakpoint} - {condition}`',
  breakpointText: '_Контрольная точка_ устанавливает размер окна просмотра:',
  breakpoints: [
    '`xs` - маленькие устройства',
    '`sm` - небольшие устройства',
    '`md` - средние устройства',
    '`lg` - большие устройства',
    '`xl` - очень большие'
  ],
  conditionText: '_condition_ применяется база классов:',
  conditions: [
    '`only` - скрыть элемент только на `xs` через `xl` контрольные точки ',
    '`and-down` - скрыть элемент на указанной точке останова и скрыть `sm` через контрольные точки` lg`',
    '`and-up` -скрыть элемент в указанной точке останова и до `sm` через контрольные точки` lg`'
  ],
  displayHeader: 'Дисплей',
  displayText: 'Укажите свойство `display`. Эти классы могут быть применены в следующем формате `d- {display}`.',
  displays: [
    '`d-inline-flex` -  устанавливает свойство отображения элемента `inline-flex`',
    '`d-flex` - устанавливает свойство отображения элемента `flex`',
    '`d-inline-block` - устанавливает свойство отображения элемента `inline-block`',
    '`d-block` -  устанавливает свойство отображения элемента `block`',
    '`d-inline` - устанавливает свойство отображения элемента `inline`'
  ]
}
