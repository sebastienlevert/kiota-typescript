import {deserializeIntoEducationResource} from './deserializeIntoEducationResource';
import {EducationTeamsAppResource} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationTeamsAppResource(educationTeamsAppResource: EducationTeamsAppResource | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEducationResource(educationTeamsAppResource),
        "appIconWebUrl": n => { educationTeamsAppResource.appIconWebUrl = n.getStringValue() as any ; },
        "appId": n => { educationTeamsAppResource.appId = n.getStringValue() as any ; },
        "teamsEmbeddedContentUrl": n => { educationTeamsAppResource.teamsEmbeddedContentUrl = n.getStringValue() as any ; },
        "webUrl": n => { educationTeamsAppResource.webUrl = n.getStringValue() as any ; },
    }
}
