import {serializeTeamworkUserIdentity} from '../../../models/serializeTeamworkUserIdentity';
import {HideForUserPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeHideForUserPostRequestBody(writer: SerializationWriter, hideForUserPostRequestBody: HideForUserPostRequestBody | undefined = {}) : void {
            writer.writeObjectValueFromMethod("user", hideForUserPostRequestBody.user as any, serializeTeamworkUserIdentity);
}
