import {deserializeIntoOnenotePatchContentCommand} from '../../../../../../../../../../../models/deserializeIntoOnenotePatchContentCommand';
import {OnenotePatchContentPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOnenotePatchContentPostRequestBody(onenotePatchContentPostRequestBody: OnenotePatchContentPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "commands": n => { onenotePatchContentPostRequestBody.commands = n.getCollectionOfObjectValuesFromMethod(deserializeIntoOnenotePatchContentCommand) as any ; },
    }
}
