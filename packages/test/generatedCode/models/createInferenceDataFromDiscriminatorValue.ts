import {InferenceData} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createInferenceDataFromDiscriminatorValue(parseNode: ParseNode | undefined) : InferenceData {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new InferenceData();
}
