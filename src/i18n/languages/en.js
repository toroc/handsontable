/**
 * Authors: Wojciech Szymański
 * Last updated: 23.08.2017
 *
 * Description: Definition file for English language.
 */
import {langDefinitionsController as l} from '../langDefinitionsController';
import * as C from '../constants';

l.registerLangDefinition('en', {
  [C.CONTEXTMENU_ITEMS_ALIGN]: 'Alignment',
  [C.CONTEXTMENU_ITEMS_ROW_ABOVE]: 'Insert row above',
  [C.CONTEXTMENU_ITEMS_REMOVE_ROW]: ['Remove row', 'Remove rows [rangeOfRows]'],
  [C.CONTEXTMENU_ITEMS_REMOVE_COLUMN]: ['Remove column', 'Remove columns [rangeOfColumns]'],
  [C.FILTERS_CONDITIONS_NONE]: 'None',
  [C.FILTERS_CONDITIONS_EMPTY]: 'Is empty',
  [C.FILTERS_LABELS_FILTER_BY_CONDITION]: 'Filter by condition:',
  [C.FILTERS_LABELS_FILTER_BY_VALUE]: 'Filter by value:',
  [C.FILTERS_BUTTONS_OK]: 'OK',
  [C.FILTERS_BUTTONS_CANCEL]: 'Cancel'
});