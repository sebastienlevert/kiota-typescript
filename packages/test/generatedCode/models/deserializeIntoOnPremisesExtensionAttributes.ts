import {OnPremisesExtensionAttributes} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOnPremisesExtensionAttributes(onPremisesExtensionAttributes: OnPremisesExtensionAttributes | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "extensionAttribute1": n => { onPremisesExtensionAttributes.extensionAttribute1 = n.getStringValue() as any ; },
        "extensionAttribute10": n => { onPremisesExtensionAttributes.extensionAttribute10 = n.getStringValue() as any ; },
        "extensionAttribute11": n => { onPremisesExtensionAttributes.extensionAttribute11 = n.getStringValue() as any ; },
        "extensionAttribute12": n => { onPremisesExtensionAttributes.extensionAttribute12 = n.getStringValue() as any ; },
        "extensionAttribute13": n => { onPremisesExtensionAttributes.extensionAttribute13 = n.getStringValue() as any ; },
        "extensionAttribute14": n => { onPremisesExtensionAttributes.extensionAttribute14 = n.getStringValue() as any ; },
        "extensionAttribute15": n => { onPremisesExtensionAttributes.extensionAttribute15 = n.getStringValue() as any ; },
        "extensionAttribute2": n => { onPremisesExtensionAttributes.extensionAttribute2 = n.getStringValue() as any ; },
        "extensionAttribute3": n => { onPremisesExtensionAttributes.extensionAttribute3 = n.getStringValue() as any ; },
        "extensionAttribute4": n => { onPremisesExtensionAttributes.extensionAttribute4 = n.getStringValue() as any ; },
        "extensionAttribute5": n => { onPremisesExtensionAttributes.extensionAttribute5 = n.getStringValue() as any ; },
        "extensionAttribute6": n => { onPremisesExtensionAttributes.extensionAttribute6 = n.getStringValue() as any ; },
        "extensionAttribute7": n => { onPremisesExtensionAttributes.extensionAttribute7 = n.getStringValue() as any ; },
        "extensionAttribute8": n => { onPremisesExtensionAttributes.extensionAttribute8 = n.getStringValue() as any ; },
        "extensionAttribute9": n => { onPremisesExtensionAttributes.extensionAttribute9 = n.getStringValue() as any ; },
    }
}
