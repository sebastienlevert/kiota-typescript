import {serializeBaseCollectionPaginationCountResponse} from '../../../models/serializeBaseCollectionPaginationCountResponse';
import {serializeMailTips} from '../../../models/serializeMailTips';
import {GetMailTipsResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetMailTipsResponse(writer: SerializationWriter, getMailTipsResponse: GetMailTipsResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, getMailTipsResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", getMailTipsResponse.value as any, serializeMailTips);
}
