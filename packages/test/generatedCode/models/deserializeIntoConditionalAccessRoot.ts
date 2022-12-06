import {deserializeIntoAuthenticationContextClassReference} from './deserializeIntoAuthenticationContextClassReference';
import {deserializeIntoConditionalAccessPolicy} from './deserializeIntoConditionalAccessPolicy';
import {deserializeIntoConditionalAccessTemplate} from './deserializeIntoConditionalAccessTemplate';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoNamedLocation} from './deserializeIntoNamedLocation';
import {ConditionalAccessRoot} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoConditionalAccessRoot(conditionalAccessRoot: ConditionalAccessRoot | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(conditionalAccessRoot),
        "authenticationContextClassReferences": n => { conditionalAccessRoot.authenticationContextClassReferences = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAuthenticationContextClassReference) as any ; },
        "namedLocations": n => { conditionalAccessRoot.namedLocations = n.getCollectionOfObjectValuesFromMethod(deserializeIntoNamedLocation) as any ; },
        "policies": n => { conditionalAccessRoot.policies = n.getCollectionOfObjectValuesFromMethod(deserializeIntoConditionalAccessPolicy) as any ; },
        "templates": n => { conditionalAccessRoot.templates = n.getCollectionOfObjectValuesFromMethod(deserializeIntoConditionalAccessTemplate) as any ; },
    }
}
