import {AccessReviewScope} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AccessReviewReviewerScope extends AccessReviewScope implements Parsable {
    /** The query specifying who will be the reviewer. */
    private _query?: string | undefined;
    /** In the scenario where reviewers need to be specified dynamically, this property is used to indicate the relative source of the query. This property is only required if a relative query, for example, ./manager, is specified. Possible value: decisions. */
    private _queryRoot?: string | undefined;
    /** The type of query. Examples include MicrosoftGraph and ARM. */
    private _queryType?: string | undefined;
    /**
     * Instantiates a new AccessReviewReviewerScope and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "query": n => { this.query = n.getStringValue(); },
            "queryRoot": n => { this.queryRoot = n.getStringValue(); },
            "queryType": n => { this.queryType = n.getStringValue(); },
        };
    };
    /**
     * Gets the query property value. The query specifying who will be the reviewer.
     * @returns a string
     */
    public get query() {
        return this._query;
    };
    /**
     * Sets the query property value. The query specifying who will be the reviewer.
     * @param value Value to set for the query property.
     */
    public set query(value: string | undefined) {
        this._query = value;
    };
    /**
     * Gets the queryRoot property value. In the scenario where reviewers need to be specified dynamically, this property is used to indicate the relative source of the query. This property is only required if a relative query, for example, ./manager, is specified. Possible value: decisions.
     * @returns a string
     */
    public get queryRoot() {
        return this._queryRoot;
    };
    /**
     * Sets the queryRoot property value. In the scenario where reviewers need to be specified dynamically, this property is used to indicate the relative source of the query. This property is only required if a relative query, for example, ./manager, is specified. Possible value: decisions.
     * @param value Value to set for the queryRoot property.
     */
    public set queryRoot(value: string | undefined) {
        this._queryRoot = value;
    };
    /**
     * Gets the queryType property value. The type of query. Examples include MicrosoftGraph and ARM.
     * @returns a string
     */
    public get queryType() {
        return this._queryType;
    };
    /**
     * Sets the queryType property value. The type of query. Examples include MicrosoftGraph and ARM.
     * @param value Value to set for the queryType property.
     */
    public set queryType(value: string | undefined) {
        this._queryType = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("query", this.query);
        writer.writeStringValue("queryRoot", this.queryRoot);
        writer.writeStringValue("queryType", this.queryType);
    };
}
