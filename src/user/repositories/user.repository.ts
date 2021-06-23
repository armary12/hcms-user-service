import { Injectable } from '@nestjs/common';
import { ModelCtor, Model, DataTypes, Sequelize } from 'sequelize';
import { RDSService } from 'artifacts/rds/rds.service';
import { BaseRepository } from 'artifacts/rds/core/base.repository';

@Injectable()
export class UserRepository extends BaseRepository {
  private userModel: ModelCtor<Model>;

  constructor(private rdsService: RDSService) {
    super();
  }

  protected init() {
    this.userModel = this.rdsService
      .getRDSClient()
      .getModelBuilder()
      .define(
        'user',
        {
          userId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
          },
          username: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          password: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          idCard: {
            type: DataTypes.STRING,
          },
          name: {
            type: DataTypes.STRING,
          },
          firstName: {
            type: DataTypes.STRING,
          },
          middleName: {
            type: DataTypes.STRING,
          },
          lastName: {
            type: DataTypes.STRING,
          },
          email: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          telNo: {
            type: DataTypes.STRING,
          },
          gender: {
            type: DataTypes.STRING,
          },
          birthDate: {
            type: DataTypes.TIME,
          },
          type: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          address: {
            type: DataTypes.STRING,
          },
          subdisId: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          districtId: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          provinceId: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          regionId: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          countryId: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          isDeleted: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
          },
          status: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'active',
          },
          providerId: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          companyId: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          createdDate: {
            type: DataTypes.TIME,
            defaultValue: Sequelize.fn('NOW'),
          },
          updatedDate: {
            type: DataTypes.TIME,
            defaultValue: Sequelize.fn('NOW'),
          },
        },
        'hcmsuser',
      );
    return this.userModel;
  }
}
