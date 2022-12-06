import {serializeTeamworkUserIdentity} from '../../../../models/serializeTeamworkUserIdentity';
import {UnhideForUserPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUnhideForUserPostRequestBody(writer: SerializationWriter, unhideForUserPostRequestBody: UnhideForUserPostRequestBody | undefined = {}) : void {
            writer.writeObjectValueFromMethod("user", unhideForUserPostRequestBody.user as any, serializeTeamworkUserIdentity);
}
