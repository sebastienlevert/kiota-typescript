import {MediaSource} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMediaSourceFromDiscriminatorValue(parseNode: ParseNode | undefined) : MediaSource {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MediaSource();
}
