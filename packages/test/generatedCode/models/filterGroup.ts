import {createFilterClauseFromDiscriminatorValue} from './createFilterClauseFromDiscriminatorValue';
import {FilterClause} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class FilterGroup implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Filter clauses (conditions) of this group. All clauses in a group must be satisfied in order for the filter group to evaluate to true. */
    private _clauses?: FilterClause[] | undefined;
    /** Human-readable name of the filter group. */
    private _name?: string | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Gets the clauses property value. Filter clauses (conditions) of this group. All clauses in a group must be satisfied in order for the filter group to evaluate to true.
     * @returns a filterClause
     */
    public get clauses() {
        return this._clauses;
    };
    /**
     * Sets the clauses property value. Filter clauses (conditions) of this group. All clauses in a group must be satisfied in order for the filter group to evaluate to true.
     * @param value Value to set for the clauses property.
     */
    public set clauses(value: FilterClause[] | undefined) {
        this._clauses = value;
    };
    /**
     * Instantiates a new filterGroup and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "clauses": n => { this.clauses = n.getCollectionOfObjectValues<FilterClause>(createFilterClauseFromDiscriminatorValue); },
            "name": n => { this.name = n.getStringValue(); },
        };
    };
    /**
     * Gets the name property value. Human-readable name of the filter group.
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. Human-readable name of the filter group.
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfObjectValues<FilterClause>("clauses", this.clauses);
        writer.writeStringValue("name", this.name);
        writer.writeAdditionalData(this.additionalData);
    };
}
