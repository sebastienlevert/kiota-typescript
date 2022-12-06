import {ConditionalAccessRoot} from './index';
import {serializeAuthenticationContextClassReference} from './serializeAuthenticationContextClassReference';
import {serializeConditionalAccessPolicy} from './serializeConditionalAccessPolicy';
import {serializeConditionalAccessTemplate} from './serializeConditionalAccessTemplate';
import {serializeEntity} from './serializeEntity';
import {serializeNamedLocation} from './serializeNamedLocation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeConditionalAccessRoot(writer: SerializationWriter, conditionalAccessRoot: ConditionalAccessRoot | undefined = {}) : void {
        serializeEntity(writer, conditionalAccessRoot)
            writer.writeCollectionOfObjectValuesFromMethod("authenticationContextClassReferences", conditionalAccessRoot.authenticationContextClassReferences as any, serializeAuthenticationContextClassReference);
            writer.writeCollectionOfObjectValuesFromMethod("namedLocations", conditionalAccessRoot.namedLocations as any, serializeNamedLocation);
            writer.writeCollectionOfObjectValuesFromMethod("policies", conditionalAccessRoot.policies as any, serializeConditionalAccessPolicy);
            writer.writeCollectionOfObjectValuesFromMethod("templates", conditionalAccessRoot.templates as any, serializeConditionalAccessTemplate);
}
