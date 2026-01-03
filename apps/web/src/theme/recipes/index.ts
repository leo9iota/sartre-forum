import { absoluteCenter } from './absolute-center';
import { button } from './button';
import { group } from './group';
import { spinner } from './spinner';
import { switchRecipe } from './switch';

// Only export custom recipes that aren't already in Park UI preset
// Park UI handles: accordion, alert, avatar, badge, card, checkbox, dialog, etc.

export const recipes = {
    button,
    group,
    absoluteCenter,
    spinner
};

export const slotRecipes = {
    switchRecipe
};
