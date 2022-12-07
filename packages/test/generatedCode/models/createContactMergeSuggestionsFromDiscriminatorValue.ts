import {ContactMergeSuggestions} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createContactMergeSuggestionsFromDiscriminatorValue(parseNode: ParseNode | undefined) : ContactMergeSuggestions {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ContactMergeSuggestions();
}
