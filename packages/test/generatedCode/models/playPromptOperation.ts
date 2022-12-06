import {CommsOperation} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PlayPromptOperation extends CommsOperation, Partial<Parsable> {
}
