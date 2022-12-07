import {PlannerCategoryDescriptions} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPlannerCategoryDescriptions(plannerCategoryDescriptions: PlannerCategoryDescriptions | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "category1": n => { plannerCategoryDescriptions.category1 = n.getStringValue() as any ; },
        "category10": n => { plannerCategoryDescriptions.category10 = n.getStringValue() as any ; },
        "category11": n => { plannerCategoryDescriptions.category11 = n.getStringValue() as any ; },
        "category12": n => { plannerCategoryDescriptions.category12 = n.getStringValue() as any ; },
        "category13": n => { plannerCategoryDescriptions.category13 = n.getStringValue() as any ; },
        "category14": n => { plannerCategoryDescriptions.category14 = n.getStringValue() as any ; },
        "category15": n => { plannerCategoryDescriptions.category15 = n.getStringValue() as any ; },
        "category16": n => { plannerCategoryDescriptions.category16 = n.getStringValue() as any ; },
        "category17": n => { plannerCategoryDescriptions.category17 = n.getStringValue() as any ; },
        "category18": n => { plannerCategoryDescriptions.category18 = n.getStringValue() as any ; },
        "category19": n => { plannerCategoryDescriptions.category19 = n.getStringValue() as any ; },
        "category2": n => { plannerCategoryDescriptions.category2 = n.getStringValue() as any ; },
        "category20": n => { plannerCategoryDescriptions.category20 = n.getStringValue() as any ; },
        "category21": n => { plannerCategoryDescriptions.category21 = n.getStringValue() as any ; },
        "category22": n => { plannerCategoryDescriptions.category22 = n.getStringValue() as any ; },
        "category23": n => { plannerCategoryDescriptions.category23 = n.getStringValue() as any ; },
        "category24": n => { plannerCategoryDescriptions.category24 = n.getStringValue() as any ; },
        "category25": n => { plannerCategoryDescriptions.category25 = n.getStringValue() as any ; },
        "category3": n => { plannerCategoryDescriptions.category3 = n.getStringValue() as any ; },
        "category4": n => { plannerCategoryDescriptions.category4 = n.getStringValue() as any ; },
        "category5": n => { plannerCategoryDescriptions.category5 = n.getStringValue() as any ; },
        "category6": n => { plannerCategoryDescriptions.category6 = n.getStringValue() as any ; },
        "category7": n => { plannerCategoryDescriptions.category7 = n.getStringValue() as any ; },
        "category8": n => { plannerCategoryDescriptions.category8 = n.getStringValue() as any ; },
        "category9": n => { plannerCategoryDescriptions.category9 = n.getStringValue() as any ; },
    }
}
