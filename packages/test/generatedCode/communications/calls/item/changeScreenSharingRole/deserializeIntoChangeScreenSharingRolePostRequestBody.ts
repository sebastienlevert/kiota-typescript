import {ScreenSharingRole} from '../../../../models/screenSharingRole';
import {ChangeScreenSharingRolePostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoChangeScreenSharingRolePostRequestBody(changeScreenSharingRolePostRequestBody: ChangeScreenSharingRolePostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "role": n => { changeScreenSharingRolePostRequestBody.role = n.getEnumValue<ScreenSharingRole>(ScreenSharingRole) as any ; },
    }
}
