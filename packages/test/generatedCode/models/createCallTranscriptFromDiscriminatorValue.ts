import {CallTranscript} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCallTranscriptFromDiscriminatorValue(parseNode: ParseNode | undefined) : CallTranscript {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CallTranscript();
}
