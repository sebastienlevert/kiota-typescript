import {ScreenSharingRole} from '../../../../models/screenSharingRole';
import {ChangeScreenSharingRolePostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeChangeScreenSharingRolePostRequestBody(writer: SerializationWriter, changeScreenSharingRolePostRequestBody: ChangeScreenSharingRolePostRequestBody | undefined = {}) : void {
            writer.writeEnumValue<ScreenSharingRole>("role", changeScreenSharingRolePostRequestBody.role);
}
