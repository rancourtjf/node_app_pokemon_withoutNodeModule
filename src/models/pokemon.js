module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Pokemon', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
          isEmpty:{msg:"Vous n'avez pas inscrit de nom"},
          notNull:{msg:'Le nom est une propriété requise'}
        }
      },
      hp: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
          isInt:{msg:'Utilisez uniquement des nombres entiers pour les points de vie'},
          notNull:{msg:'Les points de vie sont une propriété requise'}
        }
      },
      cp: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
          isInt:{msg:'Utilisez uniquement des nombres entiers pour lles dégâts'},
          notNull:{msg:'Les dégâts sont une propriété requise'}
        }
      },
      picture: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
          isURL:{msg:"Utilisez une adresse URL valide pour le lien vers l'image"},
          notNull:{msg:'Les points de vie sont une propriété requise'}
        }
      },
      types: {
        type: DataTypes.STRING,
        allowNull: false,
        /*get() {
          console.log( this.getDataValue('types').split(','))
          return this.getDataValue('types').split(',')
   
        },
        
        set(types) {
          this.setDataValue('types', types.join())
        },*/
      }
    }, {
      timestamps: true,
      createdAt: 'created',
      updatedAt: false
    })
  }