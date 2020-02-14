'use strict';

/**
 * When adding new locales, please maintain alphabetic ordering.
 * "en" should remain in the first position.
 * Tests will be failing otherwise.
 */

module.exports = {
  // supported locales
  _locales: ['en', 'ru'],

  // shared defines
  _defs: {
    n: '{{var n = e.params.limit;}}',
    mPlural: { // plural for the words item (element) and character
      en: '{{? n!=1 }}s{{?}}',
      ru: '{{? n>=2 && n<=4 }}а{{?? n!=1 }}ов{{?}}',
    },
    propPlural: { // plural for the word property (attribute)
      en: '{{? n==1 }}y{{??}}ies{{?}}',
      ru: '{{? n==1 }}е{{?? n>=2 && n<=4 }}я{{??}}ей{{?}}',
    }
  },

  // error messages
  'false schema': {
    en: 'boolean schema is false',
    ru: 'схема равна false',
  },
  $ref: {
    en: 'can\\\'t resolve reference {{=e.params.ref}}',
    ru: 'не найдена схема {{=e.params.ref}}',
  },
  additionalItems: {
    en: '{{#def.n}}should not have more than {{=n}} item{{#def.mPlural}}',
    ru: '{{#def.n}}должно иметь не более, чем {{=n}} элемент{{#def.mPlural}}',
  },
  additionalProperties: {
    en: 'should not have additional properties',
    ru: 'не должно иметь дополнительные поля',
  },
  anyOf: {
    en: 'should match some schema in "anyOf"',
    ru: 'должно соответствовать одной их схем в "anyOf"',
  },
  dependencies: {
    _defs: {
      n: '{{var n = e.params.depsCount;}}'
    },
    en: '{{#def.n}}should have propert{{#def.propPlural}} {{=e.params.deps}} when property {{=e.params.property}} is present',
    ru: '{{#def.n}}должно иметь пол{{? n==1 }}е{{??}}я{{?}} {{=e.params.deps}}, когда присутствует поле {{=e.params.property}}',
  },
  enum: {
    en: 'should be equal to one of predefined values',
    ru: 'должно быть равен одному из значений в "enum"',
  },
  format: {
    en: 'should match format "{{=e.params.format}}"',
    ru: 'должно соответствовать формату "{{=e.params.format}}"',
  },
  maximum: {
    _defs: {
      c: '{{var cond = e.params.comparison + " " + e.params.limit;}}'
    },
    en: '{{#def.c}}should be {{=cond}}',
    ru: '{{#def.c}}должно быть {{=cond}}',
  },
  minimum: {
    _defs: {
      c: '{{var cond = e.params.comparison + " " + e.params.limit;}}'
    },
    en: '{{#def.c}}should be {{=cond}}',
    ru: '{{#def.c}}должно быть {{=cond}}',
  },
  maxItems: {
    en: '{{#def.n}}should not have more than {{=n}} item{{#def.mPlural}}',
    ru: '{{#def.n}}должно иметь не более, чем {{=n}} элемент{{#def.mPlural}}',
  },
  minItems: {
    en: '{{#def.n}}should not have less than {{=n}} item{{#def.mPlural}}',
    ru: '{{#def.n}}должно иметь не менее, чем {{=n}} элемент{{#def.mPlural}}',
  },
  maxLength: {
    en: '{{#def.n}}should not be longer than {{=n}} character{{#def.mPlural}}',
    ru: '{{#def.n}}должно быть не длиннее, чем {{=n}} символ{{#def.mPlural}}',
  },
  minLength: {
    en: '{{#def.n}}should not be shorter than {{=n}} character{{#def.mPlural}}',
    ru: '{{#def.n}}должно быть не короче, чем {{=n}} символ{{#def.mPlural}}',
  },
  maxProperties: {
    en: '{{#def.n}}should not have more than {{=n}} propert{{#def.propPlural}}',
    ru: '{{#def.n}}должно иметь не более, чем {{=n}} пол{{#def.propPlural}}',
  },
  minProperties: {
    en: '{{#def.n}}should not have less than {{=n}} propert{{#def.propPlural}}',
    ru: '{{#def.n}}должно иметь не менее, чем {{=n}} пол{{#def.propPlural}}',
  },
  multipleOf: {
    en: 'should be a multiple of {{=e.params.multipleOf}}',
    ru: 'должно быть кратным {{=e.params.multipleOf}}',
  },
  not: {
    en: 'should not be valid according to schema in "not"',
    ru: 'должно не соответствовать схеме в "not"',
  },
  oneOf: {
    en: 'should match exactly one schema in "oneOf"',
    ru: 'должно соответствовать в точности одной схемe в "oneOf"',
  },
  pattern: {
    en: 'should match pattern "{{=e.params.pattern}}"',
    ru: 'должно соответствовать образцу "{{=e.params.pattern}}"',
  },
  required: {
    en: 'should have required property {{=e.params.missingProperty}}',
    ru: 'не заполнено обязательное поле {{=e.params.missingProperty}}',
  },
  type: {
    _defs: {
      t: '{{var t = e.params.type;}}'
    },
    en: 'should be {{=e.params.type}}',
    ru: 'должно быть {{=e.params.type}}',
  },
  uniqueItems: {
    en: 'should not have duplicate items (items ## {{=e.params.j}} and {{=e.params.i}} are identical)',
    ru: 'не должно иметь повторяющихся элементов (элементы {{=e.params.j}} и {{=e.params.i}} идентичны)',
  },
  custom: {
    en: 'should pass "{{=e.keyword}}" keyword validation',
    ru: 'должно соответствовать правилу "{{=e.keyword}}"',
  },
  propertyNames: {
    en: 'property name \'{{=e.params.propertyName}}\' is invalid',
    ru: 'имя поля \'{{=e.params.propertyName}}\' не соответствует схеме',
  },
  patternRequired: {
    en: 'should have property matching pattern "{{=e.params.missingPattern}}"',
    ru: 'должно иметь поле, соответствующее образцу "{{=e.params.missingPattern}}"',
  },
  switch: {
    en: 'should pass "switch" keyword validation, case {{=e.params.caseIndex}} fails',
    ru: 'должно соответствовать правилу {{=e.params.caseIndex}} в "switch"',
  },
  const: {
    en: 'should be equal to constant',
    ru: 'должно быть равно заданному значению',
  },
  contains: {
    en: 'should contain a valid item',
    ru: 'должно содержать значение соответствующее схеме',
  },
  formatMaximum: {
    _defs: {
      c: '{{var cond = e.params.comparison + " " + e.params.limit;}}'
    },
    en: '{{#def.c}}should be {{=cond}}',
    ru: '{{#def.c}}должно быть {{=cond}}',
  },
  formatMinimum: {
    _defs: {
      c: '{{var cond = e.params.comparison + " " + e.params.limit;}}'
    },
    en: '{{#def.c}}should be {{=cond}}',
    ru: '{{#def.c}}должно быть {{=cond}}',
  },
  formatExclusiveMaximum: {
    en: 'formatExclusiveMaximum should be boolean',
    ru: 'formatExclusiveMaximum должно быть boolean',
  },
  formatExclusiveMinimum: {
    en: 'formatExclusiveMinimum should be boolean',
    ru: 'formatExclusiveMinimum должно быть boolean',
  },
  if: {
    en: 'should match "{{=e.params.failingKeyword}}" schema',
    ru: 'должно соответствовать схемe "{{=e.params.failingKeyword}}"',
  }
};

module.exports.exclusiveMaximum = module.exports.maximum;
module.exports.exclusiveMinimum = module.exports.minimum;
