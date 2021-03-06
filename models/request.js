/* Smoke Alarm Installation Request Portal (getasmokealarm.org)
 * 
 * Copyright (C) 2015  American Red Cross
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 * 
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('Request', {
	name: DataTypes.TEXT,
	address: DataTypes.TEXT,
	assigned_rc_region: DataTypes.TEXT,
	city: DataTypes.TEXT,
	state: DataTypes.TEXT,
	zip: DataTypes.TEXT,
	phone: DataTypes.TEXT,
	email: DataTypes.TEXT,
        serial: { type: DataTypes.TEXT, unique: true },
        status: DataTypes.TEXT
    })
}
