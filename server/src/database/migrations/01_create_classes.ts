import {Knex} from 'knex';

export async function up(knex: Knex){
  return knex.schema.createTable('classes', table =>{
    table.increments('id').primary();
    table.string('subject').notNullable();
    table.decimal('cost').notNullable();

    /* Chave estrangeira (foreign_key) referenciando a chave primaria (primary key) da tabela Users */
    table.integer('user_id').notNullable().references('id').inTable('users').onUpdate('CASCADE').onDelete('CASCADE');
  });
}

export async function down(knex: Knex){
  return knex.schema.dropTable('classes');
}