import {TeamworkHostedContent} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ChatMessageHostedContent extends Partial<Parsable>, TeamworkHostedContent {
}
