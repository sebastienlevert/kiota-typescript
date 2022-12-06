import {deserializeIntoEntity} from './deserializeIntoEntity';
import {ApplicationTemplate} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoApplicationTemplate(applicationTemplate: ApplicationTemplate | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(applicationTemplate),
        "categories": n => { applicationTemplate.categories = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "description": n => { applicationTemplate.description = n.getStringValue() as any ; },
        "displayName": n => { applicationTemplate.displayName = n.getStringValue() as any ; },
        "homePageUrl": n => { applicationTemplate.homePageUrl = n.getStringValue() as any ; },
        "logoUrl": n => { applicationTemplate.logoUrl = n.getStringValue() as any ; },
        "publisher": n => { applicationTemplate.publisher = n.getStringValue() as any ; },
        "supportedProvisioningTypes": n => { applicationTemplate.supportedProvisioningTypes = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "supportedSingleSignOnModes": n => { applicationTemplate.supportedSingleSignOnModes = n.getCollectionOfPrimitiveValues<string>() as any ; },
    }
}
