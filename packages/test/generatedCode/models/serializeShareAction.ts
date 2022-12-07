import {ShareAction} from './index';
import {serializeIdentitySet} from './serializeIdentitySet';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeShareAction(writer: SerializationWriter, shareAction: ShareAction | undefined = {}) : void {
            writer.writeCollectionOfObjectValuesFromMethod("recipients", shareAction.recipients as any, serializeIdentitySet);
}
