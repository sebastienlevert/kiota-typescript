import {AppLogCollectionRequest} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAppLogCollectionRequestFromDiscriminatorValue(parseNode: ParseNode | undefined) : AppLogCollectionRequest {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AppLogCollectionRequest();
}
